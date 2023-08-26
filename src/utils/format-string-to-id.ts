type TOptions = {
  exclude?: string[];
  prefix?: string;
  suffix?: string;
};

export function formatStringToId(text: string, options?: TOptions) {
  let id = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();

  if (options?.exclude) {
    const excludeRegExp = new RegExp(options.exclude.join("|"), "g");

    id = id.replace(excludeRegExp, "");
  }

  if (options?.prefix) {
    id = options.prefix + id;
  }

  if (options?.suffix) {
    id = id + options.suffix;
  }

  return id;
}
