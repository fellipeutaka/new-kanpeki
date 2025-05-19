import { AccordionDemo } from "~/demos/accordion-demo";
import { AlertDemo } from "~/demos/alert-demo";
import { AlertDialogDemo } from "~/demos/alert-dialog-demo";
import { AvatarDemo } from "~/demos/avatar-demo";
import { BadgeDemo } from "~/demos/badge-demo";
import { BreadcrumbDemo } from "~/demos/breadcrumb-demo";
import { ButtonDemo } from "~/demos/button-demo";
import { CalendarDemo } from "~/demos/calendar-demo";
import { CardDemo } from "~/demos/card-demo";
import { CarouselDemo } from "~/demos/carousel-demo";
import { ChartDemo } from "~/demos/chart-demo";
import { CheckboxDemo } from "~/demos/checkbox-demo";
import { CollapsibleDemo } from "~/demos/collapsible-demo";
import { ComboboxDemo } from "~/demos/combobox-demo";
import { ComponentWrapper } from "~/demos/component-wrapper";
import { DatePickerDemo } from "~/demos/date-picker-demo";
import { DialogDemo } from "~/demos/dialog-demo";
import { DropdownMenuDemo } from "~/demos/dropdown-menu-demo";
import { HoverCardDemo } from "~/demos/hover-card-demo";
import { InputDemo } from "~/demos/input-demo";
import { InputOTPDemo } from "~/demos/input-otp-demo";
import { LabelDemo } from "~/demos/label-demo";
import { PaginationDemo } from "~/demos/pagination-demo";
import { PopoverDemo } from "~/demos/popover-demo";
import { ProgressDemo } from "~/demos/progress-demo";
import { RadioGroupDemo } from "~/demos/radio-group-demo";
import { ResizableDemo } from "~/demos/resizable-demo";
import { SelectDemo } from "~/demos/select-demo";
import { SeparatorDemo } from "~/demos/separator-demo";
import { SkeletonDemo } from "~/demos/skeleton-demo";
import { SliderDemo } from "~/demos/slider-demo";
import { SonnerDemo } from "~/demos/sonner-demo";
import { SwitchDemo } from "~/demos/switch-demo";
import { TableDemo } from "~/demos/table-demo";
import { TabsDemo } from "~/demos/tabs-demo";
import { TextareaDemo } from "~/demos/textarea-demo";
import { ToggleDemo } from "~/demos/toggle-demo";
import { ToggleGroupDemo } from "~/demos/toggle-group-demo";
import { TooltipDemo } from "~/demos/tooltip-demo";

export default function SinkPage() {
  return (
    <div className="@container grid flex-1 gap-4 p-4">
      <ComponentWrapper name="chart" className="w-full">
        <ChartDemo />
      </ComponentWrapper>
      <ComponentWrapper name="accordion">
        <AccordionDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert">
        <AlertDemo />
      </ComponentWrapper>
      <ComponentWrapper name="alert-dialog">
        <AlertDialogDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="aspect-ratio">
        <AspectRatioDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="avatar">
        <AvatarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="badge">
        <BadgeDemo />
      </ComponentWrapper>
      <ComponentWrapper name="breadcrumb">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="button">
        <ButtonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="calendar">
        <CalendarDemo />
      </ComponentWrapper>
      <ComponentWrapper name="card">
        <CardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="carousel">
        <CarouselDemo />
      </ComponentWrapper>
      <ComponentWrapper name="checkbox">
        <CheckboxDemo />
      </ComponentWrapper>
      <ComponentWrapper name="collapsible">
        <CollapsibleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="combobox">
        <ComboboxDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="command">
        <CommandDemo />
      </ComponentWrapper> */}
      {/* <ComponentWrapper name="context-menu">
        <ContextMenuDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="date-picker">
        <DatePickerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="dialog">
        <DialogDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="drawer">
        <DrawerDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="dropdown-menu">
        <DropdownMenuDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="form">
        <FormDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="hover-card">
        <HoverCardDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input">
        <InputDemo />
      </ComponentWrapper>
      <ComponentWrapper name="input-otp">
        <InputOTPDemo />
      </ComponentWrapper>
      <ComponentWrapper name="label">
        <LabelDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="menubar">
        <MenubarDemo />
      </ComponentWrapper> */}
      {/* <ComponentWrapper name="navigation-menu">
        <NavigationMenuDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="pagination">
        <PaginationDemo />
      </ComponentWrapper>
      <ComponentWrapper name="popover">
        <PopoverDemo />
      </ComponentWrapper>
      <ComponentWrapper name="progress">
        <ProgressDemo />
      </ComponentWrapper>
      <ComponentWrapper name="radio-group">
        <RadioGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="resizable">
        <ResizableDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="scroll-area">
        <ScrollAreaDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="select">
        <SelectDemo />
      </ComponentWrapper>
      <ComponentWrapper name="separator">
        <SeparatorDemo />
      </ComponentWrapper>
      {/* <ComponentWrapper name="sheet">
        <SheetDemo />
      </ComponentWrapper> */}
      <ComponentWrapper name="skeleton">
        <SkeletonDemo />
      </ComponentWrapper>
      <ComponentWrapper name="slider">
        <SliderDemo />
      </ComponentWrapper>
      <ComponentWrapper name="sonner">
        <SonnerDemo />
      </ComponentWrapper>
      <ComponentWrapper name="switch">
        <SwitchDemo />
      </ComponentWrapper>
      <ComponentWrapper name="table">
        <TableDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tabs">
        <TabsDemo />
      </ComponentWrapper>
      <ComponentWrapper name="textarea">
        <TextareaDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle">
        <ToggleDemo />
      </ComponentWrapper>
      <ComponentWrapper name="toggle-group">
        <ToggleGroupDemo />
      </ComponentWrapper>
      <ComponentWrapper name="tooltip">
        <TooltipDemo />
      </ComponentWrapper>
    </div>
  );
}
