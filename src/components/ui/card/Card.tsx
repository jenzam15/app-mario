import Image from "next/image";
import React, { FC } from "react";
import { Character } from "@/interface";
import styles from "./Card.module.css";
import { useRouter } from "next/router";
import Spinner from "../spinner/Spinner";

interface Props {
  character: Character;
}

export const Card: FC<Props> = ({ character }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/character/${character.tail}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <h3>{character.name}</h3>
      {character.image ? (
        <Image
          src={character.image}
          alt={character.name ? character.name : "No name"}
          width={180}
          height={250}
          priority={true}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
