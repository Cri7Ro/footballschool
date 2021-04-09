import React, { useRef, useState } from 'react';
import {StyledButton, StyledButtonContainer, StyledContainer, StyledContentContainer, StyledImage} from './TrainerInfoStyle';

interface ITrainerInfo {
    trainer_name: string,
    trainer_education: string,
    trainer_achievements: string,
    trainer_image: string,
    height: number,
    setHeight: (value: number | ((prevHeight: number) => number)) => void,
};

const TrainerInfo: React.FC<ITrainerInfo> = ({trainer_name, trainer_education, trainer_achievements, trainer_image, height, setHeight}) => {
    const [info, setInfo] = useState<boolean>(false);
    const [presshand, setPresshand] = useState<boolean>(true);
    const [pressedu, setPressedu] = useState<boolean>(false);

    const ref = useRef<HTMLImageElement | null>(null);

    function handleImgLoad(): void {
        setHeight(ref.current!.height);
    }

    function handleEduClick(): void {
        setInfo(true);
        setPressedu(true);
        setPresshand(false);
    }

    function handleHandClick(): void {
        setInfo(false);
        setPressedu(false);
        setPresshand(true);   
    }

    return (
        <StyledContainer>
            <StyledContentContainer>
                <h4>{trainer_name}</h4>
                <StyledButtonContainer>
                    <StyledButton inf={presshand} onClick={handleHandClick}>
                        <img src="./img/trainers/hand.png" alt=""/>
                        Достижения
                    </StyledButton>
                    <StyledButton inf={pressedu} onClick={handleEduClick}>
                        <img src="./img/trainers/edu.png" alt=""/>
                        Образование
                    </StyledButton>
                </StyledButtonContainer>
                <h5>{info ? trainer_education : trainer_achievements}</h5>
            </StyledContentContainer>
            <StyledImage ref={ref} onLoad={handleImgLoad} src={trainer_image} alt=""/>
        </StyledContainer>
  );
}

export default TrainerInfo;