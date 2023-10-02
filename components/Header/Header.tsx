"use client";
import React from "react";
import styles from "./header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname, useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    return pathname === href ? styles.headerNavItemActive : "";
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <Link href={"/"} passHref>
              <Image
                src="./assets/logo/logo-white-bg.svg"
                height={32}
                width={80}
                alt="tread.ai"
              />
            </Link>
          </div>
          <div className={styles.headerNav}>
            <div
              onClick={() => router.push("/")}
              className={`${styles.headerNavItem} ${isActive("/")}`}
            >
              Home
            </div>
            <div
              onClick={() => router.push("/about")}
              className={`${styles.headerNavItem} ${isActive("/about")}`}
            >
              About
            </div>
            {/* <div
              onClick={() => router.push("/solutions")}
              className={`${styles.headerNavItem} ${isActive("/solutions")}`}
            >
              Our Solutions
            </div> */}
            {/* <div onClick={()=>router.push('/')} className={`${styles.headerNavItem} ${isActive("/sectors")}`}>
              Sectors
            </div>
            <div
              className={`${styles.headerNavItem} ${isActive("/knowledge")}`}
            >
              Knowledge
            </div> */}
            {/* <div onClick={()=>router.push('/')} className={`${styles.headerNavItem} ${isActive("/company")}`}>
              Company
            </div> */}
            <Link
              href={"https://portal.traed.ai"}
              passHref
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 auto",
              }}
            >
              <Button
                borderRadius="6px"
                color="#fff"
                width="130px"
                height="40px"
                backgroundColor="#06BA63"
              >
                Get Started →
              </Button>
            </Link>
          </div>

          <div className={styles.headerMenu}>
            <IconButton onClick={handleMenuOpen}>
              <Image
                height={24}
                width={24}
                src={"/assets/menu.svg"}
                alt="menu"
              />
            </IconButton>
          </div>
          {isMenuOpen && (
            <div className={styles.menuContainer}>
              <IconButton
                style={{ position: "absolute", top: "20px", right: "20px" }}
                onClick={handleMenuOpen}
              >
                <Image
                  src="/assets/cross.png"
                  height={24}
                  width={24}
                  alt="tread.ai"
                />
              </IconButton>
              <div
                className={styles.headerLogo}
                style={{ marginBottom: "16px" }}
              >
                <Image
                  src="./assets/logo/logo-white-bg.svg"
                  height={32}
                  width={80}
                  alt="tread.ai"
                />
              </div>
              <div
                className={`${styles.menuItem} ${isActive("/")}`}
                onClick={() => router.push("/")}
              >
                Home
              </div>
              <div
                className={`${styles.menuItem} ${isActive("/about")}`}
                onClick={() => router.push("/about")}
              >
                About
              </div>
              <Link
                href={"https://portal.traed.ai"}
                passHref
                style={{
                  textDecoration: "none",
                  color: "#000",
                  margin: "0 auto",
                }}
              >
                <Button
                  borderRadius="6px"
                  color="#fff"
                  width="130px"
                  height="40px"
                  backgroundColor="#06BA63"
                >
                  Get Started →
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Header;
