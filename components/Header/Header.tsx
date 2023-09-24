"use client";
import React from "react";
import styles from "./header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname, useRouter } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    return pathname === href ? styles.headerNavItemActive : "";
  };

  return (
    <div className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContainer}>
          <div className={styles.headerLogo}>
            <Image
              src="./assets/logo/logo-white-bg.svg"
              height={32}
              width={80}
              alt="tread.ai"
            />
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
            <div
              onClick={() => router.push("/solutions")}
              className={`${styles.headerNavItem} ${isActive("/solutions")}`}
            >
              Our Solutions
            </div>
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
            <Button
              borderRadius="6px"
              color="#fff"
              width="130px"
              height="40px"
              backgroundColor="#06BA63"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
