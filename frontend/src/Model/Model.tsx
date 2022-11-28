export type Value = {
  email: string;
  password: string;
};

export interface SignupProp {
  shopName: string;
  State: string;
  City: string;
  phoneNumber: Number;
  governmentIDImage: string;
  shopImage: string;
  governmentID: string;
}

export interface UserSignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ShopDetails {
  id: Number;
  shopName: string;

  State: string;
  City: string;
  pincode: Number;
  landmark: string;

  phoneNumber: Number;
  shopPhoneNumber: Number;
  // shopImage: [
  //   {
  //     Logo: File;
  //     shopImage: File;
  //     OwnerImage: File;
  //   }
  // ];
  shopCategory: string;
  shopSubCategory: string;
  shopDescription: string;
  shopOwnerName: string;
  shopOwnerPhoneNumber: Number;

  online: boolean;
  verfied: boolean;
}
