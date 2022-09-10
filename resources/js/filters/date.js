import moment from "moment";
export default function date(value, format = "DD/MM/YYYY") {
    return moment(value).format(format);
}
