import Maska from "maska";
import swalMixin from "../../../mixins/swal-mixin";
import { curriculumService } from "../../../services/curriculum-service";

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
        async save() {
            try {
                await curriculumService.editar(this.curriculum);
                window.location.href = "/dashboard?withSuccess=true";
            } catch (e) {}
        },
        back() {
            window.history.back();
        },
    },
};
