export type TCaseStudy = {
  id: number;
  img: string;
  location: string;
  loan: string;
  ltv: string;
  createdAt: string;
};

export type TBlog = {
  id: number;
  img: string;
  title: string;
  content: string;
  createdAt: string;
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
