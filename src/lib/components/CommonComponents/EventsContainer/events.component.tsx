import Image from "next/image";
import styles from "./event-summary.module.css";
import Vector2 from "@public/vector2.svg";
import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
const DynamicChart = dynamic(
  () => import("@/lib/components/CommonComponents/ListingTrackGraph"),
  {
    ssr: false,
    loading: () => <Skeleton variant="rounded" height={200} />,
  }
);

export const Events: React.FC<{ value: string; name: string }> = ({
  value,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="font-normal text-md">{value}</div>
      <div className="capitalize text-md font-[500]">{name.toUpperCase()}</div>
    </div>
  );
};

export const EventsContainer: React.FC<{
  title: string;
  events: Array<{ value: string; name: string; id: string }>;
  isLoading: boolean;
  options: any;
}> = ({ title, options, isLoading, events }) => {
  return (
    <section className={styles.sectionsummarycontainer}>
      <main className={styles.sectiondatasummary}>
        <div className="flex space-x-2 my-4 items-center">
          <div className={styles.ytdEventSummary}>{title}</div>
        </div>

        <main className={styles.chartcontainer}>
          <div style={{ width: "100%" }}>
            <DynamicChart options={options} />
          </div>
          {isLoading ? (
            <>
              <Skeleton variant="rounded" height={25} width={"100%"} />
              <Skeleton variant="rounded" height={25} width={"100%"} />
            </>
          ) : (
            <div className={styles.frameParent}>
              {events.map((event) => (
                <Events key={event.id} value={event.value} name={event.name} />
              ))}
            </div>
          )}
        </main>
      </main>
    </section>
  );
};
