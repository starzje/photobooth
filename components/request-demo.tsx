"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Link from "next/link";
import Image from "next/image";
import PageBg from "@/public/images/request-demo-bg.jpg";

import toast, { Toaster } from "react-hot-toast";

// Yup schema
const schema = yup.object().shape({
  email: yup.string().email("Upišite ispravan email").required("Email je obavezno polje"),
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
    toast.success("Upit uspješno poslan! Javit ćemo Vam se u najkraćem mogućem roku.", {
      duration: 5000,
    });
    console.log(data);
    reset({
      email: "",
      ime: "",
      grad: "",
      pitanje: "",
      mobitel: "",
      termsAccepted: true,
    });
  };

  return (
    <>
      {/* Content */}
      <div className="w-full md:w-1/2 bg-slate-100 ">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                {/* Logo */}
                <Link
                  className="inline-flex text-blue-600 transition duration-150 ease-in-out"
                  href="/"
                  aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2" />
                  </svg>
                </Link>
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">Kontaktirajte nas</h1>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
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
                          type="tel"
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
                    Submit{" "}
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
        <div id="kontakt" className="min-h-screen h-full flex flex-col justify-center">
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
