import { Header } from "../components/complex/Header";

export default {
    title: "Example/test/Header",
    component: Header,
    tags: ["autodocs"],
};

export const LoggedIn = {
    args: {
        user: {
            name: "Jane Doe",
        },
    },
};

export const LoggedOut = {};
