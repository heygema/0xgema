export function getAvailablePaginations(page: number, totalPages: number) {
  let availablePaginations: Array<string> = [...Array(totalPages)].map(
    (_, index) => (index + 1).toString()
  );

  let currentPageIndex = availablePaginations.indexOf(page.toString());

  availablePaginations = availablePaginations.slice(
    currentPageIndex - 3,
    currentPageIndex + 3
  );

  const showNext = page !== totalPages;

  const showFirst = page !== 1;

  const showPrev = page !== 1;

  availablePaginations = [...availablePaginations, String(totalPages)];

  if (showPrev) {
    availablePaginations = ["Previous", ...availablePaginations];
  }

  if (showNext) {
    availablePaginations = [
      ...availablePaginations,
      String(totalPages),
      "Next",
    ];
  }

  if (showFirst) {
    availablePaginations = ["First", ...availablePaginations];
  }

  availablePaginations = Array.from(new Set(availablePaginations));
}
