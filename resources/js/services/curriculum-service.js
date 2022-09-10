import { axiosPlugin } from "../plugins/axios-plugin";

class CurriculumService {
    #modelName = "curriculo";

    async salvar(dados) {
        let response;
        try {
            response = await axiosPlugin.post(`/${this.#modelName}`, dados);
        } catch (e) {
            throw e;
        }
        return response;
    }

    async editar(dados) {
        let response;
        try {
            response = await axiosPlugin.post(
                `/${this.#modelName}/${dados.id}`,
                dados
            );
        } catch (e) {
            throw e;
        }
        return response;
    }

    async remover(id) {
        let response;
        try {
            response = await axiosPlugin.delete(`/${this.#modelName}/${id}`);
        } catch (e) {
            throw e;
        }
        return response;
    }
}

export const curriculumService = new CurriculumService();
