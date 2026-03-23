"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Plus } from "lucide-react";

export default function ControlsPanel() {
  const [open, setOpen] = React.useState(false);

  const [search, setSearch] = React.useState("");

  const [filters, setFilters] = React.useState({
    procurement: false,
    manual: false,
    paid: false,
    unpaid: false,
  });

  const toggle = (key: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex items-center gap-2 w-full justify-between">
      {/* FILTER DROPDOWN */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[180px] justify-between border !border-neutral-200"
          >
            Filter
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[300px] p-2 ">
          <Accordion type="multiple" className="w-full">
            {/* SOURCE FILTER */}
            <AccordionItem value="source">
              <AccordionTrigger>Source</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.procurement}
                    onCheckedChange={() => toggle("procurement")}
                  />
                  <span className="text-sm">Procurement</span>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.manual}
                    onCheckedChange={() => toggle("manual")}
                  />
                  <span className="text-sm">Manual</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* STATUS FILTER */}
            <AccordionItem value="status">
              <AccordionTrigger>Status</AccordionTrigger>
              <AccordionContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.paid}
                    onCheckedChange={() => toggle("paid")}
                  />
                  <span className="text-sm">Paid</span>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={filters.unpaid}
                    onCheckedChange={() => toggle("unpaid")}
                  />
                  <span className="text-sm">Unpaid</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </PopoverContent>
      </Popover>

      {/* SEARCH BAR */}
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border !border-neutral-200 min-w-0 flex-1"
      />

      {/* ADD BUTTON */}
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        Add Manual Entry
      </Button>
    </div>
  );
}
