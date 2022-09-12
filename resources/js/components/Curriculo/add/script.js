import Maska from "maska";
import swalMixin from "../../../mixins/swal-mixin";
import { curriculumService } from "../../../services/curriculum-service";

import moment from "moment";
export default {
    plugins: {
        Maska,
    },
    mixins: [swalMixin],
    data() {
        return {
            name: "",
            email: "",
            phone_number: "51",
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
        maskOfDate() {
            let mask = "Z*";
            const dateMask = "##/##/####";
            const masks = dateMask.split("|");
            if (masks.length > 1) {
                mask = JSON.stringify(masks);
            } else {
                mask = masks.at(0);
            }
            return { mask, tokens: { Z: { pattern: /./ } } };
        },
        validarData() {
            const momentDate = moment(this.birth_date, "DD/MM/YYYY");
            return momentDate.isValid();
        },
        async save() {
            try {
                if (!this.validarData()) {
                    this.toastError("Informe uma data válida.");
                    return;
                }

                if (this.birth_date.length < 14) {
                    this.toastError("Informe um número de telefone válido.");
                    return;
                }

                const dados = {
                    name: this.name,
                    birth_date: moment(this.birth_date, "DD/MM/YYYY").format(
                        "YY-MM-DDDD"
                    ),
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
