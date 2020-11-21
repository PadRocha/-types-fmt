declare namespace fmt {
    // separator
    export function separator(): void;

    // alias the above
    export function sep(): void;

    // line
    export function line(): void;

    // title
    export function title(title: string): void;

    // field
    export function field(key: string, value: string | number, indent?: boolean): void

    // subfield
    export function subfield(key: string, value: string | number, indent?: boolean): void

    // list item
    export function li(msg: string, indent?: boolean): void;

    // arrow
    export function arrow(msg: string): void;

    // indent (shorthand for msg(msg, true)
    export function indent(msg: string): void;

    // quoteblock
    export function quoteblock(msg: string, indent?: boolean): void

    // spacer (for completeness)
    export function spacer(): void;

    // dump
    export function dump(data: any, name: string): void

    // msg
    export function msg(msg: string, indent?: boolean): void;
}

export = fmt;