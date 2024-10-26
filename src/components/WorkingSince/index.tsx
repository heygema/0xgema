import { DateTime } from "luxon";

export function WorkingSince() {
    const since = 2018;
    const currentYear = DateTime.now().year;
    const yearsElapsed = currentYear - since;

    let text = `${yearsElapsed}+`

    return <span>{text}</span>;
}
