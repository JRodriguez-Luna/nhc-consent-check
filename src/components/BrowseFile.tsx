type ButtonVariant = 'black' | 'white' | 'gray';

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children?: string;
};

const colors: Record<ButtonVariant, React.CSSProperties> = {
  white: {
    backgroundColor: 'white',
    color: '#374151',
    border: '1px solid lightgray'
  },
  black: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none'
  },
  gray: {
    backgroundColor: 'lightgray',
    color: '#374151',
    border: 'none'
  }
};

export function BrowseFile({
  variant = 'black',
  className = '',
  children
}: ButtonProps) {
  const style = colors[variant];

  return (
    <>
      <label
        htmlFor="file"
        style={{
          ...style,
          backgroundColor: 'black',
          color: 'white',             
          border: 'none',             
          width: '10rem',
          height: '3rem',             
          borderRadius: '6px',        
          cursor: 'pointer',          
          textAlign: 'center',        
          display: 'inline-flex',     
          alignItems: 'center',       
          justifyContent: 'center'    
        }}
        className={className}
      >
        {children ?? 'Browse File'}
      </label>
      <input
        id="file"
        type="file"
        style={{ display: 'none' }}
        name={children?.toString().trim()}
      />
    </>
  );
}