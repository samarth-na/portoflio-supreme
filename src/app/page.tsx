import { LeftColumn } from "@/components/newspaper/LeftColumn";
import { MainGrid } from "@/components/newspaper/MainGrid";
import { NavStrip } from "@/components/newspaper/NavStrip";
import { PostalHeader } from "@/components/newspaper/PostalHeader";
import { RightColumn } from "@/components/newspaper/RightColumn";

export default function Home() {
  return (
    <div className="pageWrapper">
      <PostalHeader />
      <NavStrip />
      <MainGrid leftColumn={<LeftColumn />} rightColumn={<RightColumn />} />
    </div>
  );
}
