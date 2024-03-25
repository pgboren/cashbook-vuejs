interface User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    enable: boolean;
    roles: { _id: string }[];
}
