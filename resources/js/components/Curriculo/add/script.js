import Maska from "maska";
import swalMixin from "../../../mixins/swal-mixin";
import { curriculumService } from "../../../services/curriculum-service";

export default {
    plugins: {
        Maska,
    },
    data() {
        return {
            name: "",
            email: "",
            phone_number: "",
            birth_date: "",
        };
    },
    methods: {
        maskOf() {
            let mask = "Z*";
            const cellPhoneMask =
                "(##) # ####-####|+## (###) ###-####|+## (##) # ####-####|(##) ####-####";
            const masks = cellPhoneMask.split("|");
            if (masks.length > 1) {
                mask = JSON.stringify(masks);
            } else {
                mask = masks.at(0);
            }
            return { mask, tokens: { Z: { pattern: /./ } } };
        },
        async save() {
            try {
                console.log("aqui");
                const dados = {
                    name: this.name,
                    birth_date: this.birth_date,
                    email: this.email,
                    phone_number: this.phone_number,
                };
                await curriculumService.salvar(dados);
                window.location.href = "/dashboard?withSuccess=true";
            } catch (e) {}
        },
        back() {
            window.history.back();
        },
    },
};
