import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "~/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-4">
      <AvatarRoot>
        <AvatarFallback>CN</AvatarFallback>

        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </AvatarRoot>
      <AvatarRoot>
        <AvatarFallback>CN</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </AvatarRoot>
      <AvatarRoot className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </AvatarRoot>
      <div className="-space-x-2 flex *:data-[slot=avatar-root]:ring-2 *:data-[slot=avatar-root]:ring-background *:data-[slot=avatar-root]:grayscale">
        <AvatarRoot>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </AvatarRoot>
      </div>
      <div className="-space-x-2 flex *:data-[slot=avatar-root]:size-12 *:data-[slot=avatar-root]:ring-2 *:data-[slot=avatar-root]:ring-background *:data-[slot=avatar-root]:grayscale">
        <AvatarRoot>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </AvatarRoot>
      </div>
      <div className="-space-x-2 flex hover:space-x-1 *:data-[slot=avatar-root]:size-12 *:data-[slot=avatar-root]:ring-2 *:data-[slot=avatar-root]:ring-background *:data-[slot=avatar-root]:grayscale *:data-[slot=avatar-root]:transition-all *:data-[slot=avatar-root]:duration-300 *:data-[slot=avatar-root]:ease-in-out">
        <AvatarRoot>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
          <AvatarFallback>LR</AvatarFallback>
        </AvatarRoot>
        <AvatarRoot>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </AvatarRoot>
      </div>
    </div>
  );
}
