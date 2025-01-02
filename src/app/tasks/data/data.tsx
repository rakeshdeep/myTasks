import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";
import React from "react";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export type Statuses = {
  value: string;
  label: string;
  icon: React.ElementType;
};

export const statuses: Statuses[] = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
];

export type Priorities = {
  label: string;
  value: string;
  icon: any;
};

export const priorities: Priorities[] = [
  {
    label: "Urgent",
    value: "urgent",
    icon: ArrowUpIcon,
  },
  {
    label: "Not Urgent",
    value: "not-urgent",
    icon: ArrowLeftIcon,
  },
  {
    label: "Important",
    value: "important",
    icon: ArrowRightIcon,
  },
  {
    label: "Not Important",
    value: "not-important",
    icon: ArrowDownIcon,
  },
];
