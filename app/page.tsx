"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmergencyItem {
  name: string;
  number: string;
}

const emergencyData: Record<string, EmergencyItem[]> = {
  danger: [
    { name: "แจ้งเหตุด่วนเหตุร้าย", number: "191" },
    { name: "แจ้งเหตุไฟไหม้/ดับเพลิง", number: "199" },
    { name: "ศูนย์ปราบปรามการโจรกรรมรถ", number: "1192" },
    { name: "กองปราบ", number: "1195" },
    { name: "แจ้งคนหาย", number: "1300" },
    { name: "ร่วมด้วยช่วยกัน", number: "1677" },
    { name: "ศูนย์เตือนภัยพิบัติแห่งชาติ", number: "192" },
    { name: "แจ้งอุบัติเหตุทางน้ำ", number: "1196" },
  ],
  medical: [
    { name: "การแพทย์ฉุกเฉินแห่งชาติ", number: "1669" },
    { name: "แพทย์ฉุกเฉิน (กทม.)", number: "1646" },
    { name: "หน่วยแพทย์ วชิรพยาบาล", number: "1554" },
    { name: "โรงพยาบาลตำรวจ", number: "1691" },
    { name: "กรมสุขภาพจิต", number: "1667" },
    { name: "ป้องกันและบรรเทาสาธารณภัย", number: "1784" },
  ],
  utility: [
    { name: "ไฟฟ้าส่วนภูมิภาค", number: "1129" },
    { name: "ไฟฟ้านครหลวง", number: "1130" },
    { name: "ประปานครหลวง", number: "1125" },
    { name: "ประปาส่วนภูมิภาค", number: "1162" },
    { name: "ประกันสังคม", number: "1506" },
    { name: "ประกันภัย", number: "1186" },
  ],
  transport: [
    { name: "ทางพิเศษแห่งประเทศไทย", number: "1543" },
    { name: "ตำรวจทางหลวง", number: "1193" },
    { name: "ตำรวจท่องเที่ยว", number: "1155" },
    { name: "FM91 สวพ.", number: "1644" },
    { name: "การรถไฟฯ", number: "1690" },
    { name: "ทางหลวงชนบท", number: "1146" },
    { name: "ช่วยเหลือนักท่องเที่ยว (TAC)", number: "02-134-4077" },
  ],
};

export default function Home() {
  const [category, setCategory] = useState<string>("danger");
  const [search, setSearch] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories: { id: string; label: string }[] = [
    { id: "danger", label: "เหตุด่วนเหตุร้าย" },
    { id: "medical", label: "การแพทย์และโรงพยาบาล" },
    { id: "utility", label: "สาธารณูปโภค" },
    { id: "transport", label: "ระหว่างเดินทาง" },
  ];

  const allItems = Object.values(emergencyData).flat();

  const filteredItems =
    showAll || search
      ? allItems.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.number.includes(search),
        )
      : emergencyData[category];

  return (
    <div className="container mx-auto py-8">
      <h1 className="scroll-m-20 p-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
        รวมเบอร์แจ้งเหตุฉุกเฉิน
      </h1>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Button
            variant={showAll ? "default" : "outline"}
            onClick={() => {
              setShowAll(true);
              setSearch("");
            }}
            className="justify-start"
          >
            ทั้งหมด
          </Button>
          {categories.map((c) => (
            <Button
              key={c.id}
              variant={!showAll && category === c.id ? "default" : "outline"}
              onClick={() => {
                setCategory(c.id);
                setSearch("");
                setShowAll(false);
              }}
              className="justify-start"
            >
              {c.label}
            </Button>
          ))}
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <Input
            placeholder="ค้นหาเบอร์หรือชื่อหน่วยงาน..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(true);
            }}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <a key={idx} href={`tel:${item.number}`} className="block">
                <Card className="cursor-pointer hover:shadow-lg">
                  <CardContent className="p-4 text-center">
                    <div className="text-lg font-bold">{item.name}</div>
                    <div className="text-2xl text-blue-600">{item.number}</div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer className="p-4 text-center">
        <p>จัดทำโดย {"นาย วชิรศักดิ์ คุ้มประสิทธิ์"}</p>
        <p>
          &copy; {new Date().getFullYear()} รวมเบอร์แจ้งเหตุฉุกเฉิน.
          สงวนลิขสิทธิ์.
        </p>
      </footer>
    </div>
  );
}
