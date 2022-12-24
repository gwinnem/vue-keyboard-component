/* eslint-disable sort-keys */
import { ILayoutItem } from '../../core/interfaces/layout.interfaces';

/**
 * Layout: Mongolian (Mongolian Script)
 */
export default <ILayoutItem>{
  name: `ms-MongolianScript`,
  lang: [`mn`],
  layout: {
    default: [
      `\u180d 1 2 3 4 5 6 7 8 9 0 \u202f = {bksp}`,
      `{tab} \u1834 \u1823 \u1821 \u1837 \u1832 \u1836 \u1826 \u1822 \u1825 \u182b \u3014 \u3015 \u1801`,
      `\u1820 \u1830 \u1833 \u1839 \u182d \u182c \u1835 \u183a \u182f ; \u180b {enter}`,
      `{shift} {empty} \u183d \u1831 \u183c \u1824 \u182a \u1828 \u182e \u1802 \u1803 / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `~ ! \u2048 \u2049 \u2014 % {ZWNJ} \u180a {ZWJ} ( ) \u180e + {bksp}`,
      `{tab} {empty} \u1838 \u1827 \u183f {empty} {empty} {empty} {empty} {empty} {empty} \u3008 \u3009 |`,
      `{empty} {empty} {empty} {empty} {empty} \u183e {empty} \u183b \u1840 \u1804 \u180c {enter}`,
      `{shift} {empty} \u1841 {empty} \u1842 {empty} {empty} \u1829 {empty} \u300a \u300b / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
