import { CardStyles } from "./styles";

export interface CardRootProps extends React.ComponentProps<"div"> {}

export function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <div
      data-slot="card-root"
      className={CardStyles.Root({ className })}
      {...props}
    />
  );
}

export interface CardHeaderProps extends React.ComponentProps<"div"> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      data-slot="card-header"
      className={CardStyles.Header({ className })}
      {...props}
    />
  );
}

export interface CardTitleProps extends React.ComponentProps<"div"> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={CardStyles.Title({ className })}
      {...props}
    />
  );
}

export interface CardDescriptionProps extends React.ComponentProps<"div"> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={CardStyles.Description({ className })}
      {...props}
    />
  );
}

export interface CardActionProps extends React.ComponentProps<"div"> {}

export function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={CardStyles.Action({ className })}
      {...props}
    />
  );
}

export interface CardContentProps extends React.ComponentProps<"div"> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div
      data-slot="card-content"
      className={CardStyles.Content({ className })}
      {...props}
    />
  );
}

export interface CardFooterProps extends React.ComponentProps<"div"> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      data-slot="card-footer"
      className={CardStyles.Content({ className })}
      {...props}
    />
  );
}
