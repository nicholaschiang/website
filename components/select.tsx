import { FormEvent, useCallback } from 'react';
import cn from 'classnames';

import SelectIcon from 'components/icons/select';
import SystemIcon from 'components/icons/system';

export interface SelectProps<T extends string> {
  options: { value: T; label?: string; icon?: JSX.Element }[];
  label: string;
  small?: boolean;
  value: T;
  onChange: (value: T) => void;
}

export default function Select<T extends string>({
  options,
  label,
  small,
  value,
  onChange,
}: SelectProps<T>): JSX.Element {
  const onChangeCallback = useCallback(
    (e: FormEvent<HTMLSelectElement>) => onChange(e.currentTarget.value as T),
    [onChange]
  );

  return (
    <label>
      <div>
        <span className='prefix'>
          <SystemIcon />
        </span>
        <select
          value={value}
          onChange={onChangeCallback}
          className={cn({ small })}
          aria-label={label}
        >
          {options.map((opt) => (
            <option value={opt.value}>{opt.label || opt.value}</option>
          ))}
        </select>
        <span className='suffix'>
          <SelectIcon />
        </span>
      </div>
      <style jsx>{`
        div {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--geist-foreground);
        }

        span {
          display: inline-flex;
          position: absolute;
          pointer-events: none;
        }

        span.prefix {
          left: var(--geist-gap-half);
        }

        span.suffix {
          right: var(--geist-gap-half);
        }

        select {
          font: inherit;
          outline: none;
          appearance: none;
          font-size: var(--geist-form-font);
          height: var(--geist-form-height);
          line-height: var(--geist-form-line-height);
          text-rendering: auto;
          width: 100%;
          border-radius: var(--geist-radius);
          border: 1px solid var(--accents-2);
          background: var(--geist-background);
          color: var(--geist-foreground);
          padding: 0 var(--geist-gap-half);
          padding-right: calc(1.5 * var(--geist-gap));
          transition: border-color 0.15s ease;
        }

        span.prefix + select {
          padding-left: calc(1.5 * var(--geist-gap));
        }

        select.small {
          font-size: var(--geist-form-small-font);
          height: var(--geist-form-small-height);
        }
      `}</style>
    </label>
  );
}
