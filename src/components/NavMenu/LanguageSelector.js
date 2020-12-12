import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// LanguageSelector
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// LanguageSelector Icons
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  select: {
    color: "white",
    fontSize: 18
  }
}));

// Cannot add styling directly onto TranslateIcon in IconComponent which requires string input
const colorInheritTranslateIcon = () => { return (<TranslateIcon style={{color:"inherit"}} />) }

export default function LanguageSelector(props) {
  const { onSelectLanguage } = props;
  const classes = useStyles();
  const [lang, setLang] = React.useState('en');

  const handleChange = (event) => {
    setLang(event.target.value);
    onSelectLanguage(event);
  };

  return (
    <FormControl aria-label="Change language" title="Change language" className={classes.formControl}>
      <Select
        id="demo-simple-select"
        IconComponent={colorInheritTranslateIcon}
        value={lang}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'zh'}>中文</MenuItem>
        <MenuItem value={'jp'}>日本語</MenuItem>
        <MenuItem value={'es'}>Español</MenuItem>
      </Select>
    </FormControl>
  )
}