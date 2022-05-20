import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  width: 1000px;
  height: 600px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;
const Box = styled(motion.div)`
  place-self: center;
  width: 490px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  position: absolute;
  bottom: 50px;
  font-size: 14px;
  font-weight: 700;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const boxVar = {
  initial: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  animate: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  exit: {
    backgroundColor: "rgba(0,0,0,0)",
  },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  return (
    <Container>
      <Grid>
        {["1", "2", "3", "4"].map((i) => (
          <Box
            whileHover={{ scale: 1.1 }}
            key={i}
            onClick={() => setId(i)}
            layoutId={i}
          >
            {(i === "2" && clicked) || (i === "3" && !clicked) ? (
              <Circle layoutId="switch" />
            ) : null}
          </Box>
        ))}
      </Grid>
      <AnimatePresence>
        <Button
          layout
          style={{
            color: clicked ? "#f76713" : "#132ef7",
            padding: clicked ? "10px" : "7px",
          }}
          onClick={() => setClicked((prev) => !prev)}
        >
          Switch
        </Button>

        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={boxVar}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box layoutId={id} style={{ backgroundColor: "white" }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Container>
  );
}

export default App;
