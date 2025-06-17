import { TableStyles } from "./styles";

export interface TableRootProps extends React.ComponentProps<"table"> {}

export function TableRoot({ className, ...props }: TableRootProps) {
  return (
    <div data-slot="table-container" className={TableStyles.Container()}>
      <table
        data-slot="table"
        className={TableStyles.Root({ className })}
        {...props}
      />
    </div>
  );
}

export interface TableHeaderProps extends React.ComponentProps<"thead"> {}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return (
    <thead
      data-slot="table-header"
      className={TableStyles.Header({ className })}
      {...props}
    />
  );
}

export interface TableBodyProps extends React.ComponentProps<"tbody"> {}

export function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={TableStyles.Body({ className })}
      {...props}
    />
  );
}

export interface TableFooterProps extends React.ComponentProps<"tfoot"> {}

export function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={TableStyles.Footer({ className })}
      {...props}
    />
  );
}

export interface TableRowProps extends React.ComponentProps<"tr"> {}

export function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={TableStyles.Row({ className })}
      {...props}
    />
  );
}

export interface TableHeadProps extends React.ComponentProps<"th"> {}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={TableStyles.Head({ className })}
      {...props}
    />
  );
}

export interface TableCellProps extends React.ComponentProps<"td"> {}

export function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={TableStyles.Cell({ className })}
      {...props}
    />
  );
}

export interface TableCaptionProps extends React.ComponentProps<"caption"> {}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={TableStyles.Caption({ className })}
      {...props}
    />
  );
}
