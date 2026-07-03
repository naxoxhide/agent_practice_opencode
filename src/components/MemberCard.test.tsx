import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemberCard } from "./MemberCard";
import { members } from "@/data/members";

describe("MemberCard", () => {
  test("renderiza nombre, numero S y pais", () => {
    const seoyeon = members[0];
    render(<MemberCard member={seoyeon} />);
    expect(screen.getByText(seoyeon.stageName)).toBeTruthy();
    expect(screen.getByText(`S${seoyeon.number}`)).toBeTruthy();
    expect(screen.getByText(seoyeon.country)).toBeTruthy();
  });

  test("pluraliza 'sub-unidad' en singular cuando corresponde", () => {
    const oneSubunitMember = { ...members[0], subunitIds: ["aaa"] };
    render(<MemberCard member={oneSubunitMember} />);
    expect(screen.getByText("1 sub-unidad")).toBeTruthy();
  });

  test("pluraliza 'sub-unidades' cuando hay mas de una", () => {
    const member = members.find((m) => m.subunitIds.length > 1)!;
    render(<MemberCard member={member} />);
    expect(screen.getByText(`${member.subunitIds.length} sub-unidades`)).toBeTruthy();
  });

  test("enlaza al perfil individual por slug", () => {
    const member = members[0];
    render(<MemberCard member={member} />);
    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe(`/integrantes/${member.slug}`);
  });
});
