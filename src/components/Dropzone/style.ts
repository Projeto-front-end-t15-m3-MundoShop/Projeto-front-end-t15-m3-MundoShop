import styled from "styled-components";

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const FilesPreview = styled.div`
  display: grid;
  grid-template-columns: 110px 110px 110px 110px;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-bottom: 30px;
  img{
    margin-top: 30px;
    width: 100px;
    height: 100px;
  }
`;

export const FilesContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const DragContainer = styled.div`
  padding: 20px 10px;
  border: 2px dotted #aaa;
  border-radius: 10px;
  background-color: #eee;
  text-align: center;
  cursor: pointer;
`;