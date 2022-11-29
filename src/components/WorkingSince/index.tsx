import { DateTime } from "luxon";

export function WorkingSince() {
    const since = 2018;
    const currentYear = DateTime.now().year;
    const yearElapsed = currentYear - since;

    return <span>{yearElapsed}+ years</span>;
}
