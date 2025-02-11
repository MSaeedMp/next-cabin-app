const ModalContainer = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className={
        "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[10000]"
      }
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default ModalContainer;
