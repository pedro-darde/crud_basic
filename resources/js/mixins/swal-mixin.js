import { Toast, ConfirmRemove } from "../helpers/sweetalert";

export default {
    methods: {
        async toastSuccess(message = "Salvo com sucesso.") {
            await Toast.fire({
                icon: "success",
                title: message,
            });
        },

        async showRemoveConfirm() {
            return await ConfirmRemove.fire({
                icon: "warning",
            });
        },
    },
};
