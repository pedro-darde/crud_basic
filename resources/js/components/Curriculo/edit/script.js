import Maska from "maska";
import swalMixin from "../../../mixins/swal-mixin";
import { curriculumService } from "../../../services/curriculum-service";
import moment from "moment";
export default {
    props: {
        item: Object,
    },
    mixins: [swalMixin],
    plugins: {
        Maska,
    },
    data() {
        return {
            curriculum: this.item,
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
            const momentDate = moment(this.curriculum.birth_date, "DD/MM/YYYY");
            return momentDate.isValid();
        },
        async save() {
            try {
                if (!this.validarData()) {
                    this.toastError("Informe uma data válida");
                    return;
                }

                if (this.curriculum.phone_number.length < 14) {
                    this.toastError("Informe um número de telefone válido.");
                    return;
                }

                const dados = {
                    name: this.curriculum.name,
                    birth_date: moment(
                        this.curriculum.birth_date,
                        "DD/MM/YYYY"
                    ).format("YYYY-MM-DD"),
                    email: this.curriculum.email,
                    phone_number: this.curriculum.phone_number,
                    id: this.curriculum.id,
                };

                await curriculumService.editar(dados);
                window.location.href = "/dashboard?withSuccess=true";
            } catch (e) {}
        },
        back() {
            window.history.back();
        },
    },
    mounted() {
        this.curriculum.birth_date = moment(this.curriculum.birth_date).format(
            "DD/MM/YYYY"
        );
    },
};
