export interface IUserData {
  login: string;
  avatar_url: string;
}

export interface IUserRequestData {
  items: IUserData[];
  total_count: number;
}
