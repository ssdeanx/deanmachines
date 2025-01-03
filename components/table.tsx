import { useAsyncList } from "@react-stately/data";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { SortDescriptor } from "@nextui-org/react";

interface Person {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  [key: string]: string; // Add index signature
}

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const load = async ({ signal }: { signal: AbortSignal }) => {
    let res = await fetch("https://swapi.py4e.com/api/people/?search", {
      signal,
    });
    let json = await res.json();

    setIsLoading(false);

    return {
      items: json.results,
    };
  };

  const sort = async ({
    items,
    sortDescriptor,
  }: {
    items: Person[];
    sortDescriptor: SortDescriptor;
  }) => {
    return {
      items: items.sort((a, b) => {
        let first = a[sortDescriptor.column as keyof Person];
        let second = b[sortDescriptor.column as keyof Person];
        let cmp = first < second ? -1 : 1;

        if (sortDescriptor.direction === "descending") {
          cmp *= -1;
        }

        return cmp;
      }),
    };
  };

  let list = useAsyncList<Person, string>({ load, sort });

  return (
    <Table
      aria-label="Example table with client side sorting"
      classNames={{
        table: "min-h-[400px]",
      }}
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting>
          Name
        </TableColumn>
        <TableColumn key="height" allowsSorting>
          Height
        </TableColumn>
        <TableColumn key="mass" allowsSorting>
          Mass
        </TableColumn>
        <TableColumn key="birth_year" allowsSorting>
          Birth year
        </TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
