import React from "react";
import {
  PaginationButton,
  TableData,
  TableHead,
  headerNames,
} from "./shared.components";

export const DataentryTable: React.FC<{ type: "merger" | "company" }> = ({
  type,
}) => {
  return (
    <section className="container px-4 mx-auto">
      <main className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <TableHead type={type} />
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  <tr>
                    {headerNames.map((name) => {
                      return (
                        <TableData key={name.id}>
                          {name.Component(
                            name.name,
                            name.name === ""
                              ? (
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  console.log(event.target.checked);
                                }
                              : undefined
                          )}
                        </TableData>
                      );
                    })}
                    {/* <TableData>
                      <TableText text="Jan 6, 2022" />
                    </TableData>
                    <TableData>
                      <StatusChip type="checked" name="Automated" />
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-x-2">
                        <CompanyProfile />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                            Arthur Melo
                          </h2>
                          <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                            authurmelo@example.com
                          </p>
                        </div>
                      </div>
                    </TableData>
                    <TableData>
                      <TableText text="Monthly Subscription" />
                    </TableData>
                    <TableData>
                      <div className="flex items-center gap-x-3">
                        <ActionButton color="indigo" name="Archive" />
                        <ActionButton color="indigo" name="Download" />
                      </div>
                    </TableData> */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <div className="flex items-center justify-between mt-6">
        <PaginationButton name="Previous" type="previous" />
        <PaginationButton name="Next" type="next" />
      </div>
    </section>
  );
};
