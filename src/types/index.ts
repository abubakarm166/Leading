export type TCaseStudy = {
  id: number;
  img: string;
  location: string;
  loan: string;
  ltv: string;
  description: string;
  propertyType: string;
  dealType: string;
  createdAt: string;
};

export type TBlog = {
  id: number;
  img: string;
  title: string;
  content: string;
  createdAt: string;
  slug: string;
  metaDescription?: string;
};

export type TeamMember = {
  id: number;
  firstName: string;
  lastName: string;
  quote: string;
  role: string;
  experience: string;
  email: string;
  linkedIn: string;
  img: string;
  createdAt: string;
};

export type INewsLetter = {
  name: string;
  email: string;
};

export type TCreateContact = {
  name: string;
  number: string;
  email: string;
  message: string;
};

export type TCreateRegistration = {
  name: string;
  number: string;
  email: string;
  company: string;
  postCode: string;
  marketingMaterial: boolean;
};

export type Availability = {
  id: number;
  person: string;
  from: string;
  to: string;
  type: "leave" | "available";
};

export type TCreateAppointment = {
  fullName: string;
  email: string;
  appointmentWith: string;
  date: string;
  time: string;
  type: "borrower" | "broker";
};

export type Resource = {
  id: number;
  title: string;
  file: string;
  fileName: string;
  createdAt: string;
};
