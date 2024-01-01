export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

// Define an interface for the event parameter
interface GAEvent {
  action: string;
  category: string;
  label: string;
  value: number;
}

// Add type to the pageview function parameter
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Add types to the event function parameters
export const event = ({ action, category, label, value }: GAEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
