
import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';
import logo from '../../../assets/logo.svg';
import styles from '../../../styles/getting-started.module.css';

export function Component({ fieldValues, hublParameters }) {
  const { src, alt, width, height } = fieldValues.logo;
  const { brandColors } = hublParameters;

  return (
    <header
      className={styles.wrapper}
      style={{
        backgroundColor: brandColors?.color,
        opacity: brandColors?.opacity,
          padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <img src={src} alt={alt} width={width} height={height} />
      <h1>{fieldValues.headline}</h1>
    
    </header>
  );
}

const richTextFieldDefaultValue = `
  <div>
    <div>
      <span>
        Deploy to your theme by running <pre>npm run deploy</pre> from the root directory
      </span>
      </div>
  </div>
`;

export const fields = (
  <ModuleFields>
    <ImageField
      name="logo"
      label="Logo"
      default={{ src: logo, height: 100, alt: 'LekkeSlaap logo' }}
      resizable={true}
    />
    <TextField
      name="headline"
      label="Headline"
      default="LekkeSlaap"
    />
    <RichTextField
      name="extraInfo"
      label="Extra Info"
      default={richTextFieldDefaultValue}
    />
  </ModuleFields>
);

export const meta = {
  label: 'LekkeSlaap Header',
};
