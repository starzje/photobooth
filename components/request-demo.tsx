"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

import Link from "next/link";
import Image from "next/image";
import PageBg from "@/public/images/request-demo-bg.jpg";

import toast, { Toaster } from "react-hot-toast";

// Yup schema
const schema = yup.object().shape({
  email: yup.string().required("Email je obavezno polje").email("Upišite ispravan email"),
  ime: yup.string().required("Ime je obavezno polje"),
  grad: yup.string().required("Grad je obavezno polje"),
  pitanje: yup.string().required("Vaša poruka je obavezno polje"),
  mobitel: yup
    .string()
    .nullable()
    .matches(/^(?:\+?[0-9]+)?$/, "Mobitel mora biti broj s opcionalnim '+' na početku "),
  termsAccepted: yup.boolean().oneOf([true], "Morate prihvatiti uvjete korištenja i pravila privatnosti"),
});

export default function RequestDemo() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      ime: "",
      grad: "",
      pitanje: "",
      mobitel: "",
      termsAccepted: true,
    },
  });

  const onSubmit = (data: any) => {
    const serviceId = "service_4423njb";
    const templateId = "template_mp1ccrt";
    const userId = "58llVOwbudJ1xJl3C";

    const templateParams = {
      user_name: data.ime,
      user_email: data.email,
      user_city: data.grad,
      user_phone: data.mobitel,
      user_question: data.pitanje,
    };

    const sendEmail = new Promise((resolve, reject) => {
      emailjs.send(serviceId, templateId, templateParams, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          resolve(response);
        },
        (error) => {
          console.log("FAILED...", error);
          reject(error);
        }
      );
    });

    toast.promise(sendEmail, {
      loading: "Slanje upita..",
      success: "Upit uspješno poslan! Javit ćemo Vam se u najkraćem mogućem roku.",
      error: "Došlo je do pogreške pri slanju upita.",
    });

    sendEmail.then(() =>
      reset({
        email: "",
        ime: "",
        grad: "",
        pitanje: "",
        mobitel: "",
        termsAccepted: true,
      })
    );
  };

  return (
    <>
      {/* Content */}
      <div id="kontakt" className="w-full md:w-1/2 bg-slate-100  ">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                {/* Logo */}
                <Link
                  className="inline-flex text-blue-600 transition duration-150 ease-in-out"
                  href="/"
                  aria-label="Photobooth Zagreb">
                  <Image src="/images/logo-blue.svg" width={40} height={40} alt="Photobooth Zagreb" />
                </Link>
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">Kontaktirajte nas</h1>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="marko-markic@gmail.com"
                          className="form-input py-2 w-full placeholder-gray-400"
                          type="email"
                        />
                      )}
                    />
                    <>
                      {errors.email ? (
                        <span className="text-red-500 text-sm">{String(errors.email.message)} </span>
                      ) : undefined}
                    </>
                  </div>

                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Ime <span className="text-rose-500">*</span>
                      </label>
                      <Controller
                        name="ime"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            placeholder="Marko"
                            className="form-input py-2 w-full placeholder-gray-400"
                            type="text"
                          />
                        )}
                      />
                      <>
                        {errors.ime ? (
                          <span className="text-red-500 text-sm">{String(errors.ime.message)} </span>
                        ) : undefined}
                      </>
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="pcode">
                        Broj mobitela
                      </label>
                      <Controller
                        name="mobitel"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                          <input
                            placeholder="+385 99 123 4567"
                            className="form-input py-2 w-full placeholder-gray-400"
                            type="tel"
                            ref={ref}
                            value={value || ""}
                            onChange={(e) => {
                              // Allow only numbers and optional '+' at the start
                              const filteredValue = e.target.value.replace(/[^0-9+]|(?!^)\+/g, "");
                              onChange(filteredValue);
                            }}
                          />
                        )}
                      />
                      <>
                        {errors.mobitel ? (
                          <span className="text-red-500 text-sm">{String(errors.mobitel.message)} </span>
                        ) : undefined}
                      </>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">
                      Grad <span className="text-rose-500">*</span>
                    </label>
                    <Controller
                      name="grad"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          placeholder="Zagreb"
                          className="form-input py-2 w-full placeholder-gray-400"
                          type="text"
                        />
                      )}
                    />
                    <>
                      {errors.grad ? (
                        <span className="text-red-500 text-sm">{String(errors.grad.message)} </span>
                      ) : undefined}
                    </>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="pitanje">
                      Vaša poruka <span className="text-rose-500">*</span>
                    </label>
                    <Controller
                      name="pitanje"
                      control={control}
                      render={({ field }) => (
                        <textarea
                          {...field}
                          placeholder="Ovdje opišite vrstu događaja, datum, lokaciju i sve ostale detalje koje smatrate bitnima."
                          className="form-textarea py-2 w-full placeholder-gray-400"
                          rows={4}
                        />
                      )}
                    />
                    <>
                      {errors.pitanje ? (
                        <span className="text-red-500 text-sm">{String(errors.pitanje.message)} </span>
                      ) : undefined}
                    </>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Pošalji upit{" "}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <Controller
                      name="termsAccepted"
                      control={control}
                      defaultValue={true}
                      render={({ field: { onChange, onBlur, value, name, ref } }) => (
                        <input
                          type="checkbox"
                          className="form-checkbox mt-0.5"
                          onChange={onChange}
                          onBlur={onBlur}
                          checked={value}
                          name={name}
                          ref={ref}
                        />
                      )}
                    />
                    <span className="text-sm text-slate-500 ml-3">
                      Ispunjavanjem ove forme slažete se sa našim{" "}
                      <Link className="text-blue-600 hover:underline" href="/uvjeti-koristenja">
                        Uvjetima korištenja
                      </Link>{" "}
                      i{" "}
                      <Link className="text-blue-600 hover:underline" href="/uvjeti-koristenja">
                        Pravilima privatnosti
                      </Link>
                      .
                    </span>
                  </label>
                  <>
                    {errors.termsAccepted ? (
                      <span className="text-red-500 text-sm">{String(errors.termsAccepted.message)} </span>
                    ) : undefined}
                  </>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">
        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={PageBg}
            width={760}
            height={900}
            priority
            alt="Background"
          />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">
                Odlučili ste se za neki paket ili Vam treba još informacija?
              </h2>
              <div className="space-y-3">
                <p className="text-slate-400 italic">
                  Kontaktirajte nas i rado ćemo Vam pomoći u odabiru paketa ili odgovoriti na sva Vaša pitanja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
