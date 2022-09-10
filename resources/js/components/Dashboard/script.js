import swalMixin from "../../mixins/swal-mixin";

export default {
    mixins: [swalMixin],
    props: {
        user: Object,
        items: Array,
    },
    methods: {
        redefinirUrl() {
            const origin = window.location.origin;
            const pathName = window.location.pathname;
            window.history.replaceState({}, "", origin + pathName);
        },
    },
    created() {
        const queryString = window.location.search;
        const URLParams = new URLSearchParams(queryString);
        if (URLParams.get("withSuccess")) {
            this.toastSuccess();
            this.redefinirUrl();
        }
    },
};
