import swalMixin from "../../../mixins/swal-mixin";
import { curriculumService } from "../../../services/curriculum-service";

export default {
    mixins: [swalMixin],
    props: {
        user: Object,
        items: Array,
    },
    data() {
        return {
            curriculums: this.items,
        };
    },
    methods: {
        async remove(id) {
            const { isConfirmed } = await this.showRemoveConfirm();

            if (isConfirmed) {
                await curriculumService.remover(id);
                this.toastSuccess("Removido com sucesso.");
                this.curriculums = this.curriculums.filter(
                    (item) => item.id !== id
                );
            }
        },
    },
};
