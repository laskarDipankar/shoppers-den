export type Value = {
  email: string;
  password: string;
};

export interface SignupProp {
  firstName: string;
  lastName: string;
  email: string;
  shopName: string;
  State: string;
  City: string;
  pincode: Number;
  phoneNumber: Number;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  filename: string;
  Id: Number;
  Gender: string;
}

export interface UserSignup {
  fName: string;
  lName: string;
  email_id: string;
  Upassword: string;
  UconfirmPassword: string;
  UdateOfBirth: string;
  UGender: string;
}
