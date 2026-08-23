/**
 * Vendored from downshift-shadcn-combobox by OmerMakesStuff — MIT licensed.
 *
 * Source:  https://github.com/OmerMakesStuff/downshift-shadcn-combobox
 * Docs:    https://downshift-shadcn-combobox.vercel.app
 *
 * Copied verbatim from the project's own published registry item. Copyright remains with the
 * original author; this copy is redistributed under the same MIT licence.
 */

import {
  Children,
  type ComponentPropsWithoutRef,
  isValidElement,
  type ReactElement,
  useEffect,
  useMemo,
} from 'react';

import { PopoverContent } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

import { ComboboxItem, type ComboboxItemProps } from './combobox-item';
import { useComboboxContext } from './context';

export const ComboboxContent = ({
  onOpenAutoFocus,
  children,
  ...props
}: ComponentPropsWithoutRef<typeof PopoverContent>) => {
  const { getMenuProps, isOpen, openedOnce, onItemsChange } =
    useComboboxContext();

  const childItems = useMemo(
    () =>
      Children.toArray(children).filter(
        (child): child is ReactElement<ComboboxItemProps> =>
          isValidElement(child) && child.type === ComboboxItem
      ),
    [children]
  );

  useEffect(() => {
    onItemsChange?.(
      childItems.map(child => ({
        disabled: child.props.disabled,
        label: child.props.label,
        value: child.props.value,
      }))
    );
  }, [childItems, onItemsChange]);

  return (
    <PopoverContent
      {...props}
      forceMount
      asChild
      onOpenAutoFocus={e => {
        e.preventDefault();
        onOpenAutoFocus?.(e);
      }}
      className={cn(
        'w-[--radix-popper-anchor-width] p-0 [[data-radix-popper-content-wrapper]:has(&)]:h-0',
        !isOpen && 'pointer-events-none',
        !openedOnce && 'hidden'
      )}
      {...getMenuProps?.({}, { suppressRefError: true })}
    >
      <ScrollArea className='[&>[data-radix-scroll-area-viewport]]:max-h-80 [&>[data-radix-scroll-area-viewport]]:p-1'>
        {children}
      </ScrollArea>
    </PopoverContent>
  );
};
