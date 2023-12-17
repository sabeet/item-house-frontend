"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";


interface ItemProps {
  owner: string;
  description: string;
  title: string;
}

function Item({ owner, description, title }: ItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">{title}</div>
        <div className="flex flex-row gap-4">
          <Input disabled={!isEditing} type="text" placeholder={description} />
          <Button
            type="submit"
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Update" : "Edit"}
          </Button>
          <Button type="submit" variant="outline">
            X
          </Button>
        </div>
        <div>{owner}</div>
      </div>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
    </>
  );
}

export default Item;
