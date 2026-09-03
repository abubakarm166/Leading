type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

/** Push a GTM / gtag dataLayer event (safe on server). */
export function pushDataLayer(payload: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackEnquirySubmit(formName = "contact_enquiry") {
  pushDataLayer({
    event: "enquiry_submit",
    form_name: formName,
  });
}

export function trackPhoneClick(location: string) {
  pushDataLayer({
    event: "phone_click",
    click_location: location,
  });
}

export function trackEmailClick(location: string) {
  pushDataLayer({
    event: "email_click",
    click_location: location,
  });
}
