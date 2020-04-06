import * as React from 'react';

type DialogProps = {
  header?: JSX.Element;
  footer?: JSX.Element;
  children: JSX.Element;
  show?: boolean;
  onClose?: () => void;
  closeOnBlur?: boolean;
  // TODO
  // closeOnEsc?: boolean;
};
export default function Dialog(props: DialogProps) {
  const { header, footer, children, show: initialShow, onClose, closeOnBlur = true } = props;
  const [show, setShow] = React.useState(initialShow);
  React.useEffect(() => setShow(initialShow), [initialShow]);
  return show ? (
    <div
      className="fixed inset-0 w-screen h-screen"
      style={{ backgroundColor: 'rgba(10, 10, 10, 0.33)' }}
      onClick={e => {
        if (closeOnBlur && onClose && e.currentTarget === e.target) {
          setShow(false);
          onClose();
        }
      }}
    >
      <div
        className="m-auto max-w-sm rounded overflow-hidden shadow-lg fixed inset-0 flex flex-col bg-white"
        style={{ maxHeight: '15rem' }}
      >
        {header}
        <div className="flex-grow">{children}</div>
        {footer}
      </div>
    </div>
  ) : null;
}
