import MainLayout from "../../../components/bo/layout/MainLayout";

export default {
    title: "Yogiyo-bo/layout/MainLayout",
    component: MainLayout,
    parameters: {
        layout: "fullscreen",
    },
};

export const Preview = {
    render: () => (
        <MainLayout>
            <div>write content here ...</div>
        </MainLayout>
    ),
};
