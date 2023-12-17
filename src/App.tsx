"use client";

import Item from "./Item";
import { getAllItems } from "./DataService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect, SetStateAction } from "react";
import "./App.css";

interface Item {
  id: number;
  owner: string;
  description: string;
  title: string;
}

function App() {
  const { toast } = useToast();
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getAllItems();
      setItems(items);
    };

    fetchItems();
  }, []);

  const handleSelect = (value: SetStateAction<string>) => {
    console.log(value);
    setOwner(value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const body = { title, description, owner };

    fetch("http://localhost:9090/addItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((body) => {
        const newItems = [...items];
        newItems.push(body);
        setItems(newItems);
        console.table(body)
        toast({
          description: "Data has been sent.",
        });
      })
      .catch((error) => {
        console.log(error)
        toast({
          description: "Error, data not sent. Check console.",
        });
      });
  };

  return (
    <>
      {/* title space */}
      <div className="flex flex-col h-1/3 justify-center items-center">
        <div className="h-1/3">&nbsp;</div>
        <div className="h-1/3">Sabeet's Persisting TODO</div>
        <div className="h-1/3">&nbsp;</div>
      </div>
      {/* input for todo */}

      <div className="flex flex-col h-2/3 justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row-reverse">
            <div className="">
              <Input
                className="w-[6rem]"
                type="text"
                placeholder="title?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <Input
              className="w-[15.5rem]"
              type="text"
              placeholder="type in a task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <Select onValueChange={handleSelect}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Owner?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ammu">Ammu</SelectItem>
                  <SelectItem value="Abbu">Abbu</SelectItem>
                  <SelectItem value="Sara">Sara</SelectItem>
                  <SelectItem value="Sabeet">Sabeet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button type="submit" variant="outline">
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
      <hr className="h-px my-8 border-0 bg-gray-700"></hr>
      {/* todo item list */}
      <div className="flex flex-col gap-2 p-2 justify-center items-center">
        {items.map((item) => (
          <Item
            key={item.id}
            owner={item.owner}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
      <Toaster />
    </>
  );
}

export default App;